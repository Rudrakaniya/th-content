import { Card } from "../components";

export const Dashboard = () => {
  const cardProps = {
    imageSrc:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    imageAlt: "Green double couch with wooden legs",
    percentageOfContentCompleted: 80,
    contentLength: "30m",
    subtitle: "COMMUNICATING AS A LEADER",
    title: "Peak Performance: Going From Good to Great with Simon Taudel",
    expertName: "Jane Doe",
    category: "Subway APAC",
  };
  return (
    <div>
      <div>dashboard</div>
      <Card {...cardProps} />
    </div>
  );
};
