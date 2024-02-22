interface IColorPalette {
  text: string;
  text_invert: string;
  text_deemed: string;

  border: string;
  
  dark: string;
  deep_dark: string;
  grayed: string;
  light_grayed: string;
  light: string;
  cyan: string;
  error: string;
}

interface IDimensions {
  desktop_mx_w: string;
  mobile_mx_w: string;
  main_min_height: string;
}

const THEME_PALETTE: {
  colors: IColorPalette,
  dimensions: IDimensions,
} = {
  colors: {
    // Static color palette references variables in the index.css file

    text: 'var(--text)',
    text_invert: 'var(--text_invert)',
    text_deemed: 'var(--text_deemed)',

    border: 'var(--border)',
    
    dark: 'var(--app_dark)',
    deep_dark: 'var(--app_dark_violet)',
    grayed: 'var(--app_gray)',
    light_grayed: 'var(--app_light_gray)',
    light: 'var(--app_light)',
    cyan: 'var(--app_cyan)',
    error: 'var(--error)',
  },

  dimensions: {
    desktop_mx_w: 'var(--desktop_mx_w)',
    mobile_mx_w: 'var(--mobile_mx_w)',
    main_min_height: 'var(--main_min_height)',
  }
};

export type {
  IColorPalette,
};

export {
  THEME_PALETTE,
};
