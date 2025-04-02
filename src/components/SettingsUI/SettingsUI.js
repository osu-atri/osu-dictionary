import styles from "./SettingsUI.module.css";

export function SettingsButton({ label, colorMode }) {
  let backgroundClass = styles.backgroundPrimary;

  switch (colorMode) {
    case "primary":
      backgroundClass = styles.backgroundPrimary;
      break;

    case "warning":
      backgroundClass = styles.backgroundWarn;
      break;

    case "danger":
      backgroundClass = styles.backgroundDanger;
      break;
  }
  return (
    // A rounded button that positions at the centre horizontally, with moving triangles on the background, which is tinted in `color`, and displays `label` with default font on top of it.
    // The button would be highlighted on hover
    <p>
      <button
        className={styles.settingButton + " " + backgroundClass}
        type="button"
      >
        {label}
      </button>
    </p>
  );
}

export function SettingsSwitch() {
  //
}

export function SettingsDropdown() {
  //
}

export function Settings() {
  //
}
