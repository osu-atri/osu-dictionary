export default function OsuIcon({ icon, label, scale, invert, reverse }) {
    // Invert the color of the icon on demand
    const reverseClass = reverse
      ? "auto-invert-reversed"
      : "auto-invert";
    if (!invert) reverseClass = "";

    return <img
    className={reverseClass}
    // Unable to make a reference to the image directly, so using require() instead
    src={require("@site/static/icons/" + icon + ".png").default}
    width={scale * 100 + "%"}
    alt={label}>
    </img>;
}