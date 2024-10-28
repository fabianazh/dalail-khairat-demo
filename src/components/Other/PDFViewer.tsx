"use client";

import React from "react";
import { Viewer, ScrollMode, Worker } from "@react-pdf-viewer/core";
import { scrollModePlugin } from "@react-pdf-viewer/scroll-mode";
import "@react-pdf-viewer/core/lib/styles/index.css";

export default function PDFViewer({ fileUrl }: { fileUrl: string }) {
    const scrollModePluginInstance = scrollModePlugin();
    const { SwitchScrollModeButton } = scrollModePluginInstance;

    return (
        <div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer
                    fileUrl={fileUrl}
                    plugins={[scrollModePluginInstance]}
                    defaultScale={1.0}
                />
            </Worker>
            <div className="text-center mt-2">
                <SwitchScrollModeButton mode={ScrollMode.Vertical} />
            </div>
        </div>
    );
}
