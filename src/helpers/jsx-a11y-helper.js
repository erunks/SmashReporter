export function buttonize(action) {
  return {
    role: 'button',
    onClick: action,
    onKeyDown: (event) => {
      // Handles Enter/Return pressed
      if (event.keycode === 13) {
        action(event);
      }
    }
  };
}

export default { buttonize };
