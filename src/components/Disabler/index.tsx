function Disabler() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 40,
        bottom: 0,
        left: 0,
        right: 0,
        color: "white",
        backgroundColor: "rgba(0,0,0,.5)",
        zIndex: 1,
      }}
    >
      Loading...
    </div>
  );
}

export default Disabler;
