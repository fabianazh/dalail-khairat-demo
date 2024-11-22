interface NavItem {
    title: string;
    subtitle: string;
    link: string;
}

interface TextData {
    title?: string;
    author?: string;
    index?: string;
    text?: string;
    desc?: string | string[];
    content?: {
        index?: string;
        text?: string;
        arab?: {
            title?: string;
            arab?: string | string[];
            latin?: string | string[];
            translate?: string | string[];
            source?: string | string[];
        };
    }[];
    arab?: {
        title?: string;
        arab?: string | string[];
        latin?: string | string[];
        translate?: string | string[];
        source?: string | string[];
    };
    notes?: string[];
}

interface TextContent {
    id: string;
    title: string;
    audio?: string;
    data: TextData[];
}

interface TabContent {
    id: string;
    title: string;
    tab: {
        label: string;
        audio?: string;
        data: TextData[];
    }[];
    tabLayout?: boolean;
}

interface Essentials {
    id: string;
    title: string;
    content: {
        title?: string;
        data:
            | {
                  desc: string;
                  total: string;
              }[]
            | string;
    }[];
}

interface Prohibition {
    prohibition: string;
    male: string;
    female: string;
    desc: string;
    dam: string;
}

interface Diff {
    index?: string;
    status: string;
    type: string;
    consequences: string;
}
