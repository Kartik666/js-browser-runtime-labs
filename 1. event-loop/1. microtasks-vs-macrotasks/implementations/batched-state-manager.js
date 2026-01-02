function createStore(initialState) {
    let state = initialState;
    const listeners = new Set();

    let notifyScheduled = false;

    function notify() {
        notifyScheduled = false;
        listeners.forEach(l => l(state));
    }

    function scheduleNotify() {
        if (notifyScheduled) return;

        notifyScheduled = true;
        queueMicrotask(notify);
    }

    return {
        getState() {
            return state;
        },

        setState(partial) {
            state = { ...state, ...partial };
            scheduleNotify();
        },

        subscribe(listener) {
            listeners.add(listener);
            return () => listeners.delete(listener);
        }
    };
}


/*Summary: This implementation of a state manager batches state updates
[synchronous code]
  setState(1)
  setState(2)
  setState(3)
  queueMicrotask(notify)
------------------------
[microtask phase]
  notify subscribers
------------------------
[render]
*/