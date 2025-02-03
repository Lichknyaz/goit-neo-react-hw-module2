import css from "./Options.module.css";

function Options({ onUpdate, totalFeedbacks, onReset }) {
  return (
    <div className={css.wrapper}>
      <button
        className={css.button}
        onClick={() => {
          onUpdate("good");
        }}
      >
        Good
      </button>
      <button
        className={css.button}
        onClick={() => {
          onUpdate("neutral");
        }}
      >
        Neutral
      </button>
      <button
        className={css.button}
        onClick={() => {
          onUpdate("bad");
        }}
      >
        Bad
      </button>
      {Boolean(totalFeedbacks) && (
        <button className={css.button} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
