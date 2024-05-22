export const CustomTooltip = ({ active, payload }: any) => {
  if (!active) {
    return null;
  }

  const title = payload[0].payload.title;
  const intencity = payload[0].value;
  const relevance = payload[1].value;
  //   const relevance = payload[1].value;

  return (
    <div className="rounded-sm bg-white shadow-sm border overflow-hidden">
      <ul>
        <li>{title}</li>
        <li>{intencity}</li>
        <li>{relevance}</li>
      </ul>
    </div>
  );
};
