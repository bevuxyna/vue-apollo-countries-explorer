export const enum Continents {
    All = 'All',
    Africa = 'Africa',
    Asia = 'Asia',
    Europe = 'Europe',
    North_America = 'North America',
    South_America = 'South America',
    Oceania = 'Oceania',
    Antarctica = 'Antarctica'
}

export const CONTINENT_COLORS: Record<Continents, { bg: string; text: string }> = {
    [Continents.Africa]:        { bg: "rgba(249,115,22,0.15)",  text: "#FB923C" },
    [Continents.Asia]:          { bg: "rgba(20,184,166,0.15)",   text: "#2DD4BF" },
    [Continents.Europe]:        { bg: "rgba(99,102,241,0.15)",   text: "#818CF8" },
    [Continents.North_America]: { bg: "rgba(168,85,247,0.15)",   text: "#C084FC" },
    [Continents.South_America]: { bg: "rgba(234,179,8,0.15)",    text: "#FACC15" },
    [Continents.Oceania]:       { bg: "rgba(6,182,212,0.15)",    text: "#22D3EE" },
    [Continents.Antarctica]:    { bg: "rgba(148,163,184,0.15)",  text: "#94A3B8" },
};