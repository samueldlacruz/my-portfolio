import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
    const { i18n, t } = useTranslation();

    const toggle = () => {
        const nextLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(nextLang);
        localStorage.setItem('language', nextLang);
    };

    return (
        <button
            onClick={toggle}
            className="text-[11px] uppercase tracking-wider text-white/50 hover:text-accent border border-white/15 hover:border-accent/40 px-2 py-0.5 rounded-sm transition-all duration-200"
        >
            {t('language.toggle')}
        </button>
    );
};

export default LanguageToggle;
