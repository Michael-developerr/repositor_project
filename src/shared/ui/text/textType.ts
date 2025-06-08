export const WeighsValues = {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
} as const;

export const SizesValues = {
    xxs: '14px',
    xs: '16px',
    s: '24px',
    l: '26px',
    XL: '32px',
} as const;
export type SizeKeys = keyof typeof SizesValues;
export type WeighKeys = keyof typeof WeighsValues;
