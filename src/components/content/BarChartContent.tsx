import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList
} from 'recharts';
import { getTheme, typography, spacing, ThemeKey } from '../../styles/themes';

interface BarChartContentProps {
  theme?: ThemeKey;
  title: string;
  data: Array<{
    label: string;
    value: number;
    color?: string; // Optional override color for specific bars
  }>;
  showValues?: boolean;
}

export const BarChartContent: React.FC<BarChartContentProps> = ({
  theme = 'dark',
  title,
  data,
  showValues = true,
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
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>{title}</h2>
      
      <div style={chartContainerStyle}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 60,
            }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke={colors.grid} 
            />
                                    <XAxis
                                      dataKey="label"
                                      tick={{
                                        fill: colors.text,
                                        fontSize: typography.sizes.body,
                                        fontFamily: typography.fontFamily.primary
                                      }}
                                      axisLine={{ stroke: colors.border }}
                                      tickLine={false}
                                      dy={10}
                                    />
                                    <YAxis
                                      tick={{
                                        fill: colors.text,
                                        fontSize: typography.sizes.small,
                                        fontFamily: typography.fontFamily.primary
                                      }}                          axisLine={false}
                          tickLine={false}
                        />
                        <Bar
                          dataKey="value"
                          fill={colors.accent}
                          radius={[4, 4, 0, 0]}
                          animationDuration={1500}
                        >
                          {showValues && (
                            <LabelList
                              dataKey="value"
                              position="top"
                              style={{
                                fill: colors.text,
                                fontSize: typography.sizes.body,
                                fontWeight: 'bold',
                                fontFamily: typography.fontFamily.primary
                              }}
                            />
                          )}            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
