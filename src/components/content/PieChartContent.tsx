import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip
} from 'recharts';
import { getTheme, typography, spacing, ThemeKey } from '../../styles/themes';

interface PieChartContentProps {
  theme?: ThemeKey;
  title: string;
  data: Array<{
    label: string;
    value: number;
    color?: string;
  }>;
  donut?: boolean;
}

export const PieChartContent: React.FC<PieChartContentProps> = ({
  theme = 'dark',
  title,
  data,
  donut = true,
}) => {
  const colors = getTheme(theme);

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    gap: spacing.lg,
    padding: spacing.md,
  };

  const titleStyle: React.CSSProperties = {
    fontSize: typography.sizes.h2,
    fontWeight: typography.weights.bold,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.md,
  };

  const chartContainerStyle: React.CSSProperties = {
    flex: 1,
    width: '100%',
    minHeight: 400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  // Generate colors if not provided
  const getCellColor = (index: number, specificColor?: string) => {
    if (specificColor) return specificColor;
    
    // Generate a palette using distinct theme colors and variations for better contrast
    const palette = [
      colors.accent,        // Primary accent
      colors.accentSecondary, // Secondary accent
      colors.text,          // Main text color (high contrast to background)
      colors.textSecondary, // Muted text color
      colors.border,        // Often a different shade/tint derived from accent
      colors.shadow,        // Also derived from accent, typically darker
      colors.overlay,       // Light accent overlay
    ];
    
    return palette[index % palette.length];
  };

  // Calculate total value for percentage computation
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>{title}</h2>
      
      <div style={chartContainerStyle}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={donut ? "60%" : "0%"}
              outerRadius="80%"
              paddingAngle={donut ? 5 : 0}
              dataKey="value"
              nameKey="label"
              stroke={colors.bg}
              strokeWidth={2}
              animationDuration={1500}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={getCellColor(index, entry.color)} 
                />
              ))}
            </Pie>
            <Legend 
              layout="vertical" 
              verticalAlign="middle" 
              align="right"
              wrapperStyle={{ paddingLeft: '20px' }}
              formatter={(value, entry: any) => {
                const percent = totalValue > 0 ? (entry.payload.value / totalValue) * 100 : 0;
                return (
                  <span style={{ 
                    color: colors.text, 
                    fontSize: typography.sizes.body, 
                    fontWeight: 500,
                    fontFamily: typography.fontFamily.primary,
                    marginLeft: 10
                  }}>
                    {value} ({Math.round(percent)}%)
                  </span>
                );
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
