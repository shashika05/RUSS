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
            cardTitle: (
              <p>
                18<sup>th</sup> November 2024
              </p>
            ),
            title: "Deadline for Submission of Abstracts",
            cardSubtitle: (
              <p>
                Abstracts must be submitted by 18<sup>th</sup> November 2024
              </p>
            ),
            cardDetailedText: (
              <p>
                The deadline for submission of abstracts is 18<sup>th</sup>{" "}
                November 2024. Abstracts must be submitted by this date to be
                considered for the symposium.
              </p>
            ),
          },
          {
            cardTitle: (
              <p>
                12<sup>th</sup> December 2024
              </p>
            ),
            title: "Notification of Acceptance",
            cardSubtitle: (
              <p>
                Authors will be notified of acceptance by 12<sup>th</sup>{" "}
                December 2024
              </p>
            ),
            cardDetailedText: (
              <p>
                Authors will be notified of acceptance by 12<sup>th</sup>{" "}
                December 2024. Authors whose abstracts are accepted will be
                invited to submit full papers for the symposium.
              </p>
            ),
          },
          {
            cardTitle: (
              <p>
                23<sup>rd</sup> January 2025
              </p>
            ),
            title: "Conference Date",
            cardSubtitle: (
              <p>
                The conference will be held on 23<sup>rd</sup> January 2025
              </p>
            ),
            cardDetailedText: (
              <p>
                The conference will be held on 23<sup>rd</sup> January 2025 at
                the Faculty of Science, University of Ruhuna. The conference
                will feature presentations by undergraduate researchers from a
                variety of disciplines.
              </p>
            ),
          },
        ]}
      />
    </>
  );
};

export default Timeline;
