import Navigo from 'navigo';
import axios from 'axios';

const router = new Navigo('/', { linksSelector: 'a' });

let effects = [];
let currentEffectOrder = 0;

let rootComponent = null;
let rootContainer = null;

let states = [];
let currentStateOrder = 0;

const debounce = (fn, timeout = 100) => {
    let timeId = null;

    return (...rest) => {
        if (timeId) clearTimeout(timeId);

        timeId = setTimeout(() => fn(...rest), timeout);
    };
};

const render = (component, container) => {
    container.innerHTML = component();

    rootComponent = component;
    rootContainer = container;

    effects.forEach((effect) => {
        effect.cb();
    });
};

const rerender = debounce(() => {
    currentStateOrder = 0;
    currentEffectOrder = 0;
    rootContainer.innerHTML = rootComponent();

    effects.forEach((effect) => {
        // shouldRunEffect = true khi không truyền deps hoặc deps khác nhau
        const shouldRunEffect =
            !effect.nextDeps ||
            effect.nextDeps?.some((dep, i) => {
                return dep !== effect?.prevDeps?.[i];
            });

        if (shouldRunEffect) {
            effect.cb();
        }
    });
});

const useState = (initialState) => {
    let state;
    let stateOrder = currentStateOrder;

    if (states[stateOrder] !== undefined) {
        state = states[stateOrder];
    } else {
        state = states[stateOrder] = initialState;
    }

    const updater = (newState) => {
        if (newState === undefined) {
            throw new Error('New state must not be undefined');
        }

        if (typeof newState === 'function') {
            states[stateOrder] = newState(states[stateOrder]);
        } else {
            states[stateOrder] = newState;
        }

        rerender();
    };

    currentStateOrder++;

    return [state, updater];
};

const useEffect = (cb, deps) => {
    let effectOrder = currentEffectOrder;

    if (!effects[effectOrder]) {
        effects.push({
            cb: cb,
            prevDeps: null,
            nextDeps: deps,
        });
    } else {
        effects[effectOrder] = {
            cb: cb,
            prevDeps: effects[effectOrder].nextDeps,
            nextDeps: deps,
        };
    }

    currentEffectOrder++;
};

router.on('/*', () => {}, {
    before(done, match) {
        states = [];
        currentStateOrder = 0;
        effects = [];
        currentEffectOrder = 0;

        done();
    },
});

const uploadFile = async (files) => {
    const CLOUND_NAME = 'dxcvs3auk';
    const PRESET_NAME = 'portfolio';
    const FOLDER_NAME = 'portfolio';

    let url = '';
    const api = `https://api.cloudinary.com/v1_1/${CLOUND_NAME}/image/upload`;

    const formData = new FormData();

    formData.append('upload_preset', PRESET_NAME);
    formData.append('folder', FOLDER_NAME);

    for (const file of files) {
        formData.append('file', file);
        const response = await axios.post(api, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        url += response.data.secure_url;
    }
    return url;
};

export { render, useState, useEffect, router, uploadFile };
