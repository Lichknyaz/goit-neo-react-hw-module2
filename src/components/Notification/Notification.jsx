function Notification({ totalFeedbacks }) {
  return Boolean(!totalFeedbacks) && <>No feedback yet</>;
}

export default Notification;
