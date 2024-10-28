interface Surah {
    nomor: number;
    nama: string;
    namaLatin: string;
    jumlahAyat: number;
    tempatTurun: string;
    arti: string;
    deskripsi: string;
    audioFull: {
        "01": string;
        "02": string;
        "03": string;
        "04": string;
        "05": string;
    };
    ayat: {
        nomorAyat: number;
        teksArab: string;
        teksLatin: string;
        teksIndonesia: string;
        audio: {
            "01": string;
            "02": string;
            "03": string;
            "04": string;
            "05": string;
        };
    }[];
    suratSelanjutnya: {
        nomor: number;
        nama: string;
        namaLatin: string;
        jumlahAyat: number;
    } | null;
    suratSebelumnya: boolean | null;
}

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
    desc?: string;
    content?: {
        index?: string;
        text?: string;
        arab?: {
            title?: string;
            arab?: string | string[];
            latin?: string;
            translate?: string;
            source?: string;
            audio?: string;
        };
    }[];
    arab?: {
        title?: string;
        arab?: string | string[];
        latin?: string;
        translate?: string;
        source?: string;
        audio?: string;
    };
    notes?: string[];
}

interface TextContent {
    id: string;
    title: string;
    data: TextData[];
}

interface TabContent {
    id: string;
    title: string;
    tab: {
        label: string;
        data: TextData[];
    }[];
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
