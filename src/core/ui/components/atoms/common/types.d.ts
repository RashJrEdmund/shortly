/* THIS FILE KEEPS HOLD OF INTERFACES/TYPES THAT'RE COMMON BETWEEN ATOMS */

export type BgVariants = 'inherit' | 'cyan' | 'deemed_cyan' | 'dark' | 'deep_dark' | 'light' | 'grayed' | 'error' | 'none';

export type FlexJustifyVariants = 'space-around' | 'space-between' | 'space-evenly' | 'start' | 'center' | 'end';

export type SizeVariants = 'unset' | 'inherit' |
    '0.5rem' | // 8px
    '0.75rem' | // 12 px
    '1rem' | // 16px
    '1.1rem' | // 18px default for all text atoms
    '1.25rem' | // 20px
    '1.5rem' | // 24px
    '1.75rem' | // 28px
    '2rem' | // 30rem;
    '2.25rem' | // 34px
    '2.5rem' | // 38px
    '2.75' | // 42 px
    '3rem' | // 46 px
    '4rem'; // 60px

export type WeightVariants = '400' | '500' | '600' | '700';

export type FLexAlignVariants = 'center' | 'start' | 'end';

export type PositionVariants = 'absolute' | 'relative' | 'fixed' | 'unset';

export type FlexDirectionVariants = 'column' | 'row' | 'unset';

export type FlexWrapVariants = 'wrap' | 'nowrap' | 'unset';

export type CursorVariants = 'default' | 'pointer' | 'text' | 'inherit' | 'not-allowed';

export interface CommonProps {
    sx?: string; media_sx?: string;
    padding?: string;
    margin?: string;
    border?: boolean;
    radius?: string;
    width?: string; media_width?: string;
    min_width?: string;
    max_width?: string;
    height?: string;
    min_height?: string;
    max_height?: string;
    gap?: string;
    bg?: BgVariants; hover_bg?: BgVariants;
    align_self?: FLexAlignVariants; media_align_self?: FLexAlignVariants;
    justify_self?: FlexJustifyVariants; media_justify_self?: FlexJustifyVariants;

    // positioning !
    position?: PositionVariants;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    transform?: string;
    z_index?: string;
}
