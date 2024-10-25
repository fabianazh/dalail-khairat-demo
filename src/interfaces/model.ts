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

interface TextContent {
    id: string;
    title: string;
    data: TextData[];
}

interface TextData {
    index?: string;
    text?: string;
    content?: {
        index?: string;
        text?: string;
        arab?: {
            title?: string;
            arab?: string;
            latin?: string;
            translate?: string;
            source?: string;
        };
    }[];
    arab?: {
        title?: string;
        arab?: string;
        latin?: string;
        translate?: string;
        source?: string;
    };
    note?: {
        text?: string;
    };
}
