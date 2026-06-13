import { useTranslation } from "react-i18next";
import { ICertificate } from "@interfaces/common/Certificate";
import ScrollReveal from "../common/ScrollReveal";
import { CertificateCard } from "./CertificateCard";

const CertificatesSection = ({ certificates }: { certificates: ICertificate[] }) => {
    const { t } = useTranslation();

    return (
        <section id="certificates" className="min-h-screen flex items-center justify-center px-6 py-24">
            <div className="w-full max-w-3xl">
                <ScrollReveal>
                    <p className="section-title">{t('certificates.title')}</p>
                </ScrollReveal>

                <div className="mt-8 flex flex-col gap-4">
                    {certificates?.map((certificate, index) => (
                        <ScrollReveal key={`cert-${index}`} delay={index * 80}>
                            <CertificateCard {...certificate} />
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificatesSection;
