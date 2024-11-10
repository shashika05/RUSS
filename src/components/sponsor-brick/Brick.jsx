import React from "react";

const Brick = () => {
  // You can modify this data with the actual sponsor information
  const bricks = [
    ...Array(5).fill("allocated"), // 5 allocated sponsor bricks
    ...Array(25).fill("available"), // 25 regular available bricks
  ];

  return (
    <div className="flex flex-col items-center py-10">
      <h1 className="text-3xl font-semibold mb-6">Sponsor Wall</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {bricks.map((status, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg min-w-40 text-white font-semibold text-center ${
              status === "allocated" ? "bg-[#6D2C95]" : "bg-gray-500"
            }`}
          >
            {/* Brick {index + 1} */}
            {status == "allocated" ? "Name of Sponsor" : "Available"}
            <div className="text-xs mt-2">
              {status === "allocated" ? "Allocated" : ""}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brick;
