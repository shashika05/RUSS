import { Chrono } from "react-chrono";

const Timeline = () => {
  return (
    <>
      <h1 className="font-semibold text-3xl md:text-5xl my-10 text-center">
        Timeline
      </h1>
      <Chrono
        mode="VERTICAL_ALTERNATING"
        enableOutline
        disableToolbar
        activeItemIndex={0}
        disableClickOnCircle
        useReadMore={false}
        theme={{
          primary: "#6D2C95",
          secondary: "#6D2C95",
          cardBgColor: "#fff",
          cardForeColor: "#6D2C95",
          titleColor: "#6D2C95",
          cardTitleColor: "#6D2C95",
          titleColorActive: "white",
        }}
        fontSizes={{
          title: "1.1rem",
        }}
        items={[
          {
            cardTitle: "12th November 2024",
            title: "Deadline for Submission of Abstracts",
            cardSubtitle: `Abstracts must be submitted by 12th November 2024`,
            cardDetailedText: `The deadline for submission of abstracts is 12th November 2024. Abstracts must be submitted by this date to be considered for the symposium.`,
          },
          {
            cardTitle: "12th December 2024",
            title: "Notification of Acceptance",
            cardSubtitle: `Authors will be notified of acceptance by 12th December 2024`,
            cardDetailedText: `Authors will be notified of acceptance by 12th December 2024. Authors whose abstracts are accepted will be invited to submit full papers for the symposium.`,
          },
          {
            cardTitle: "23rd January 2025",
            title: "Conference Date",
            cardSubtitle: `The conference will be held on 23rd January 2025`,
            cardDetailedText: `The conference will be held on 23rd January 2025 at the Faculty of Science, University of Ruhuna. The conference will feature presentations by undergraduate researchers from a variety of disciplines.`,
          },
        ]}
      />
    </>
  );
};

export default Timeline;
