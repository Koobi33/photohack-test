import { history } from "./router";

let RESOLVE_CALLBACK = (options) => {};
let REJECT_CALLBACK = () => {};

window.afterImagesPick = ({ photos }) => {
    if (!photos.length) {
        REJECT_CALLBACK();
        return;
    }

    RESOLVE_CALLBACK(photos);
};

window.shareVideo = (res) => {
    if (res) {
        RESOLVE_CALLBACK();
    } else {
        REJECT_CALLBACK();
    }
};

export const shareResult = (videoId) => {
    return callMethod('nativeShareCustom', {
        imageUrl: `http://se.ws.pho.to:5000/api/video/${videoId}`,
        providers: '[0,3,5,12]',
        close_after_share: 1,
        func: 'shareVideo',
    });
};

export const pickPictures = () => {
    return callMethod('nativePhotoSelect', {num_photos: 0, func: 'afterImagesPick'});
};

export const callMethod = async (name, options) => {
    return new Promise((resolve, reject) => {
        RESOLVE_CALLBACK = resolve;
        REJECT_CALLBACK = reject;
        const queryString = Object
          .entries(options)
          .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
          .join('&');

        const url = `callback:${name}?${queryString}`;

        const frame = document.createElement('iframe');

        frame.style.display = 'none';
        frame.src = url;
        document.documentElement.appendChild(frame);

        setTimeout(() => {
            document.documentElement.removeChild(frame);
        }, 0);
    });
};

// export const callMethod = async (name: string, options: {[key: string]: any}): Promise<any> => {
//     return new Promise((resolve, reject) => {
//         RESOLVE_CALLBACK = resolve;
//         REJECT_CALLBACK = reject;
//
//         const queryString = Object
//           .entries(options)
//           .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
//           .join('&');
//
//         const url = `callback:${name}?${queryString}`;
//
//         const frame = document.createElement('iframe');
//
//         frame.style.display = 'none';
//         frame.src = url;
//         document.documentElement.appendChild(frame);
//
//         setTimeout( () => {
//             document.documentElement.removeChild(frame);
//         }, 0);
//     });
// };
