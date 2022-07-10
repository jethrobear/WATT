export interface Stats {
    hp: number | undefined;
    ac: number | undefined;
    uc: number | undefined;
    shoot: number | undefined;
    melee: number | undefined;
}

export interface RoundStats {
    c: number;
    melee: number;
    shoot: number;
}
