import { surah } from '@/constants/model';

export const surahService = {
    getAllSurah: () => surah,
    getSurahDetail: (nomor: number) =>
        surah.find((item: Surah) => item.nomor === nomor),
};
