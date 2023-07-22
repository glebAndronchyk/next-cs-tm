export type Ternary<T, E, FOption, SOption> = T extends E ? FOption : SOption;
