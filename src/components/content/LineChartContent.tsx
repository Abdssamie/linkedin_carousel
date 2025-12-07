import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';
import { getTheme, typography, spacing, ThemeKey } from '../../styles/themes';

interface LineChartContentProps {
  theme?: ThemeKey;
  title: string;
  data: Array<{
    label: string;
    value: number;
    value2?: number; // Optional second series
  }>;
  seriesNames?: {
    value: string;
    value2?: string;
  };
}

export const LineChartContent: React.FC<LineChartContentProps> = ({
  theme = 'dark',
  title,
  data,
  seriesNames = { value: 'Series 1', value2: 'Series 2' },
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
          <LineChart
            data={data}
                                    margin={{
                                      top: 60,
                                      right: 30,
                                      left: 20,
                                      bottom: 60,
                                    }}                      >
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
                                      }}
                                      axisLine={false}
                                      tickLine={false}
                                    />                        <Line
                          type="monotone"
                          dataKey="value"
                          name={seriesNames.value}
                          stroke={colors.accent}
                          strokeWidth={4}
                          dot={{ r: 6, fill: colors.bg, strokeWidth: 3 }}
                          activeDot={{ r: 8 }}
                          animationDuration={2000}
                        />
                        {data[0]?.value2 !== undefined && (
                          <Line
                            type="monotone"
                            dataKey="value2"
                            name={seriesNames.value2}
                            stroke={colors.accentSecondary}
                            strokeWidth={4}
                            dot={{ r: 6, fill: colors.bg, strokeWidth: 3 }}
                            activeDot={{ r: 8 }}
                            animationDuration={2000}
                          />
                        )}
                        <Legend
                          verticalAlign="top"
                          height={36}
                          formatter={(value) => <span style={{ color: colors.text, fontSize: typography.sizes.body, fontFamily: typography.fontFamily.primary }}>{value}</span>}
                        />          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
