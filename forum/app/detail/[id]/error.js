"use client";

export default function Error({ error, reset }) {
  console.log(error);
  return (
    <div>
      <h4>Error!</h4>
      {/* <h5>{error}</h5> */}
      <button
        onClick={() => {
          reset();
        }}
      >
        reset
      </button>
    </div>
  );
}
