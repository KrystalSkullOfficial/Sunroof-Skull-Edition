/*
 * SPDX-License-Identifier: GPL-3.0
 * Vesktop, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2023 Vendicated and Vencord contributors
 */

import type { Rectangle } from "electron";

export interface Settings {
    discordBranch?: "stable" | "canary" | "ptb";
    transparencyOption?: "none" | "mica" | "tabbed" | "acrylic";
    tray?: boolean;
    minimizeToTray?: boolean;
    openLinksWithElectron?: boolean;
    staticTitle?: boolean;
    enableMenu?: boolean;
    disableSmoothScroll?: boolean;
    hardwareAcceleration?: boolean;
    arRPC?: boolean;
    appBadge?: boolean;
    disableMinSize?: boolean;
    clickTrayToShowHide?: boolean;
    customTitleBar?: boolean;

    splashTheming?: boolean;
    splashColor?: string;
    splashAnimationPath?: string;
    splashBackground?: string;

    spellCheckLanguages?: string[];

    audio?: {
        workaround?: boolean;
        granularSelect?: boolean;

        ignoreVirtual?: boolean;
        ignoreDevices?: boolean;
        ignoreInputMedia?: boolean;

        onlySpeakers?: boolean;
        onlyDefaultSpeakers?: boolean;
    };
}

export interface State {
    maximized?: boolean;
    minimized?: boolean;
    windowBounds?: Rectangle;
    displayid: int;

    firstLaunch?: boolean;

    steamOSLayoutVersion?: number;

    vencordDir?: string;
}
