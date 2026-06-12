import { useEffect, useState } from "react";

interface ProjectPreviewProps {
    url: string;
}

const ProjectPreview = ({ url }: ProjectPreviewProps) => {
    const [screenshotUrl, setScreenshotUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchScreenshot = async () => {
            try {
                const response = await fetch(
                    `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false`
                );
                const data = await response.json();
                if (data?.data?.screenshot?.url) {
                    setScreenshotUrl(data.data.screenshot.url);
                }
            } catch {
                // silent fail
            } finally {
                setLoading(false);
            }
        };

        fetchScreenshot();
    }, [url]);

    if (loading) {
        return (
            <div className="w-full h-36 bg-white/5 rounded-t-md animate-pulse flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
            </div>
        );
    }

    if (!screenshotUrl) {
        return (
            <div className="w-full h-28 bg-white/5 rounded-t-md flex items-center justify-center">
                <i className="ri-image-line text-white/20 text-2xl"></i>
            </div>
        );
    }

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-t-md group">
            <img
                src={screenshotUrl}
                alt="project preview"
                className="w-full h-36 object-cover object-top opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
        </a>
    );
};

export default ProjectPreview;
