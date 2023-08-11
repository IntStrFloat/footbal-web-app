import React from 'react';
interface Props {
    color: string;
}
const Background = (children: Props ) => {
  return (
    <div className="background" style={{ backgroundColor: children.color }}>
      {/* Дополнительный код для заднего фона, если необходимо */}
    </div>
  );
};

export default Background;