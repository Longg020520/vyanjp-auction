import React from 'react';
import './RankCustom.scss';

interface PT {
  rankCode?: string;
}

const RankCustom: React.FC<PT> = ({ rankCode }) => {
  return (
    <div className="rankcustom-container">
      <p>Rank </p>
      <p
        className="rank-code"
        style={{
          background:
            rankCode === 'N'
              ? '#F98874'
              : rankCode === 'S'
                ? '#EAC74F'
                : rankCode === 'SA'
                  ? '#83CE6D'
                  : rankCode === 'A'
                    ? '#BBD561'
                    : rankCode === 'AB'
                      ? '#57AEA0'
                      : rankCode === 'B'
                        ? '#76C4D8'
                        : rankCode === 'BC'
                          ? '#6B9BB8'
                          : rankCode === 'C'
                            ? '#9683A6'
                            : '#CCCCCC',
        }}
      >
        {rankCode}
      </p>
    </div>
  );
};

export default React.memo(RankCustom);
