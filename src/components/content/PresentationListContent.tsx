import React from "react";
import { getTheme, spacing, ThemeKey } from "../../styles/themes";

/**
 * PresentationListContent - Optimized list for 16:9 presentations
 * Larger text, better spacing, centered layout
 * Use for: Key points, features, benefits in presentations
 */

interface PresentationListContentProps {
    title: string;
    items: string[];
    theme: ThemeKey;
    useCheckmarks?: boolean;
}

export const PresentationListContent: React.FC<
    PresentationListContentProps
> = ({ title, items, theme, useCheckmarks = false }) => {
    const colors = getTheme(theme);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: spacing["4xl"],
                maxWidth: "1400px",
                margin: "0 auto",
                padding: `${spacing["2xl"]} ${spacing.xl}`,
            }}
        >
            {/* Title */}
            <h2
                style={{
                    fontSize: "72px",
                    fontWeight: 900,
                    color: colors.text,
                    lineHeight: 1.1,
                    margin: 0,
                    letterSpacing: "-0.02em",
                    textAlign: "center",
                    textShadow: `0 4px 16px rgba(0, 0, 0, 0.8), 0 2px 6px rgba(0, 0, 0, 0.6)`,
                }}
            >
                {title}
            </h2>

            {/* List items */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: spacing.xl,
                    width: "100%",
                }}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: spacing.xl,
                        }}
                    >
                        {/* Bullet or checkmark */}
                        <span
                            style={{
                                fontSize: "56px",
                                fontWeight: 700,
                                color: colors.accent,
                                flexShrink: 0,
                                lineHeight: 1,
                                marginTop: "8px",
                            }}
                        >
                            {useCheckmarks ? "✓" : "•"}
                        </span>

                        {/* Item text */}
                        <span
                            style={{
                                fontSize: "48px",
                                fontWeight: 600,
                                color: colors.text,
                                lineHeight: 1.4,
                                paddingTop: "8px",
                            }}
                        >
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
