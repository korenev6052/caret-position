function getCaretPosition(ctrl) {
  if (document.selection) {
    ctrl.focus();
    const range = document.selection.createRange();
    const rangelen = range.text.length;
    range.moveStart('character', -ctrl.value.length);
    const start = range.text.length - rangelen;
    return {
      start: start,
      end: start + rangelen
    };
  } else if (ctrl.selectionStart || ctrl.selectionStart == '0') {
    return {
      start: ctrl.selectionStart,
      end: ctrl.selectionEnd
    };
  } else {
    return {
      start: 0,
      end: 0
    };
  }
}

function setCaretPosition(ctrl, start, end) {
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(start, end);
  } else if (ctrl.createTextRange) {
    const range = ctrl.createTextRange();
    range.collapse(true);
    range.moveEnd('character', end);
    range.moveStart('character', start);
    range.select();
  }
}
