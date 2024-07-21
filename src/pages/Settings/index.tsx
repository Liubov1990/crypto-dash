import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/use-store";
import Button from "../../components/Button";
import { updateUserPreferences } from "../../services/firebase/db";
import { User } from "firebase/auth";
import {
  setCurrenciesList,
  setExchangeCurrency,
  setPersistentDocbox,
  setTheme,
} from "../../redux/slices/configSlice";
import {
  CRYPTO_CURRENCIES_LIST,
  EXCHANGE_CURRENCIES_LIST,
  THEMES,
} from "../../constants/currencies";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeEnum } from "../../context/ThemeContext";

function Settings() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const {
    currenciesList,
    exchangeCurrency,
    theme,
    persistentDockbox,
    serializedDockbox,
  } = useAppSelector((state) => state.config);
  const [selectedCurrency, setSelectedCurrency] = useState(exchangeCurrency);
  const [checkedCurrenciesList, setCheckedCurrenciesList] =
    useState(currenciesList);
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [isDockboxPersistent, setIsDockboxPersistent] =
    useState(persistentDockbox);
  const [isConfigSaving, setIsConfigSaving] = useState(false);

  const isRedirect = location.pathname === "/settings" && !user;

  useEffect(() => {
    if (isRedirect) {
      navigate("/");
    }
  }, []);

  const handleCurrencySelection = ({
    target: { value },
  }: ChangeEvent<HTMLSelectElement>) => {
    const currencyKey = value as keyof typeof EXCHANGE_CURRENCIES_LIST;
    setSelectedCurrency(EXCHANGE_CURRENCIES_LIST[currencyKey]);
  };

  const handleListSelection = ({
    target: { id, checked },
  }: ChangeEvent<HTMLInputElement>) => {
    if (checked) {
      const checkedCurrency = CRYPTO_CURRENCIES_LIST.find(
        (currency) => currency.id === id
      ) as Record<string, string>;
      setCheckedCurrenciesList((prevData) => [...prevData, checkedCurrency]);
    } else {
      const filteredList = checkedCurrenciesList.filter(
        (currency) => currency.id !== id
      );
      setCheckedCurrenciesList(filteredList);
    }
  };

  const handleThemeSelection = ({
    target: { value },
  }: ChangeEvent<HTMLSelectElement>) => {
    setSelectedTheme(value as ThemeEnum);
  };

  const handlePersistentDockbox = ({
    target: { checked },
  }: ChangeEvent<HTMLInputElement>) => {
    setIsDockboxPersistent(checked);
  };

  const compareSelection = (id: string) => {
    return (
      checkedCurrenciesList.findIndex((currency) => id === currency.id) !== -1
    );
  };

  const handleSaveChanges = async () => {
    setIsConfigSaving(true);
    const config = {
      exchangeCurrency: selectedCurrency,
      currenciesList: checkedCurrenciesList,
      theme: selectedTheme,
      ...(isDockboxPersistent && { serializedDockbox }),
    };
    await updateUserPreferences(user as User, config);
    dispatch(setExchangeCurrency(selectedCurrency));
    dispatch(setCurrenciesList(checkedCurrenciesList));
    dispatch(setTheme(selectedTheme));

    if (isDockboxPersistent) {
      dispatch(setPersistentDocbox(true));
    }

    setIsConfigSaving(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <fieldset>
        <legend>Choose main exchange currency:</legend>

        <select value={selectedCurrency.id} onChange={handleCurrencySelection}>
          {Object.entries(EXCHANGE_CURRENCIES_LIST).map(
            ([_currency, { id, symbol }]) => (
              <option key={id} value={id}>
                {id} ({symbol})
              </option>
            )
          )}
        </select>
      </fieldset>

      <fieldset>
        <legend>Choose crypto currencies list:</legend>

        {CRYPTO_CURRENCIES_LIST.map(({ id, symbol }) => (
          <div key={id}>
            <input
              type="checkbox"
              id={id}
              name={symbol}
              onChange={handleListSelection}
              checked={compareSelection(id)}
            />
            <label htmlFor={id}>
              {id} ({symbol})
            </label>
          </div>
        ))}
      </fieldset>

      <fieldset>
        <legend>Choose app theme:</legend>

        <select value={selectedTheme} onChange={handleThemeSelection}>
          {THEMES.map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>
      </fieldset>

      <fieldset>
        <legend>Choose layout settings:</legend>

        <div>
          <input
            type="checkbox"
            name="persistentDockbox"
            onChange={handlePersistentDockbox}
            checked={isDockboxPersistent}
          />
          <label htmlFor="persistentDockbox">
            {isDockboxPersistent
              ? "layout settings will be kept after save"
              : "layout settings will be removed after save"}
          </label>
        </div>
      </fieldset>

      <Button
        style={{ margin: 5 }}
        onClick={handleSaveChanges}
        disabled={isConfigSaving}
      >
        {isConfigSaving ? "Saving" : "Save changes"}
      </Button>
    </div>
  );
}

export default Settings;
