import React from 'react';
import { useParams } from 'react-router-dom';
import { FileText, Video, Database, ChevronLeft, ChevronRight, Check, Maximize2 } from 'lucide-react';

const ProcessDetails = () => {
    const { id } = useParams();

    // Mock data matching the exact structure from the image
    const logs = [
        {
            id: 'act5',
            time: '04:11 PM',
            title: 'Verification marked complete on Dashboard',
            type: 'success',
            artifacts: [{ type: 'video', label: 'Verification Video', id: 'art-verify-video', icon: 'video' }]
        },
        {
            id: 'act4',
            time: '04:10 PM',
            title: 'Successfully completed Cross-document verification',
            type: 'success',
            artifacts: [
                { type: 'data', label: 'BOS Dataset', id: 'art-bos-data', icon: 'file' },
                { type: 'data', label: 'DL Dataset', id: 'art-dl-data', icon: 'file' }
            ]
        },
        {
            id: 'act3',
            time: '04:09 PM',
            title: 'OCR extraction completed — all key fields identified',
            type: 'success',
            artifacts: [
                { type: 'data', label: 'BOS Dataset', id: 'art-bos-data', icon: 'file' },
                { type: 'data', label: 'DL Dataset', id: 'art-dl-data', icon: 'file' }
            ]
        },
        {
            id: 'act2',
            time: '04:08 PM',
            title: 'Documents captured successfully',
            type: 'success',
            artifacts: [
                { type: 'file', label: 'Bill of Sale', id: 'art-bos', icon: 'file' },
                { type: 'file', label: "Driver's License", id: 'art-dl', icon: 'file' },
                { type: 'video', label: 'Extraction Video', id: 'art-extract-video', icon: 'video' }
            ]
        },
        {
            id: 'act1',
            time: '04:07 PM',
            title: 'Retrieved incomplete verification task from queue',
            type: 'success',
            artifacts: [{ type: 'link', label: 'Dashboard', id: 'art-dash', icon: 'dashboard' }]
        },
    ];

    const keyDetails = {
        customerName: 'Christopher Merjanian',
        vehicle: '2019 Volkswagen Jetta',
        bosEffectiveDate: '2025-08-15',
        applicableLoan: '-',
        netVehicleValue: '$15773.00'
    };

    const sidebarArtifacts = [
        { type: 'file', label: 'Bill of Sale', id: 'art-bos', icon: 'file' },
        { type: 'file', label: "Driver's License", id: 'art-dl', icon: 'file' },
        { type: 'link', label: 'Dashboard', id: 'art-dash', icon: 'dashboard' },
        { type: 'video', label: 'Extraction Video', id: 'art-extract-video', icon: 'video' },
        { type: 'data', label: 'BOS Dataset', id: 'art-bos-data', icon: 'file' },
        { type: 'data', label: 'DL Dataset', id: 'art-dl-data', icon: 'file' },
        { type: 'video', label: 'Verification Video', id: 'art-verify-video', icon: 'video' },
    ];

    const getIconComponent = (iconType) => {
        switch (iconType) {
            case 'file': return FileText;
            case 'video': return Video;
            case 'dashboard': return Database;
            default: return FileText;
        }
    };

    return (
        <div className="flex flex-col h-screen bg-white">
            {/* Process ID Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Process ID</span>
                        <span className="font-semibold text-sm">{id}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded text-sm text-gray-700 border border-gray-200">
                        <Check className="h-3.5 w-3.5 text-green-600" />
                        <span>Done</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">1 / 4</span>
                    <button className="p-1 h-7 w-7 rounded hover:bg-gray-100">
                        <ChevronLeft className="h-4 w-4 text-gray-600" />
                    </button>
                    <button className="p-1 h-7 w-7 rounded hover:bg-gray-100">
                        <ChevronRight className="h-4 w-4 text-gray-600" />
                    </button>
                </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
                {/* Main Content */}
                <div className="flex-1 overflow-y-auto">
                    {/* Today Divider */}
                    <div className="flex items-center py-6 px-8">
                        <div className="flex-grow border-t border-gray-200"></div>
                        <span className="flex-shrink mx-4 text-xs text-gray-500 font-medium">Today</span>
                        <div className="flex-grow border-t border-gray-200"></div>
                    </div>

                    {/* Activity Timeline */}
                    <div className="px-8 pb-8">
                        <div className="max-w-3xl">
                            {logs.map((log, index) => (
                                <div key={log.id} className="relative pb-8">
                                    <div className="relative flex gap-4">
                                        {/* Time */}
                                        <div className="w-20 flex-shrink-0 text-right">
                                            <span className="text-sm text-gray-500">{log.time}</span>
                                        </div>

                                        {/* Green Square Icon with Timeline */}
                                        <div className="relative flex flex-col items-center">
                                            <div className="relative z-10 bg-white">
                                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 mt-1">
                                                    <rect x="0.75" y="0.75" width="6.5" height="6.5" rx="2" className="fill-green-100 stroke-green-700" strokeWidth="1.5" />
                                                </svg>
                                            </div>
                                            {index !== logs.length - 1 && (
                                                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-px bg-gray-200" style={{ height: 'calc(100% + 4rem)' }}></div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0 -mt-0.5">
                                            <h3 className="text-sm font-normal text-gray-900 mb-2">{log.title}</h3>

                                            {/* Artifacts */}
                                            {log.artifacts && log.artifacts.length > 0 && (
                                                <div className="flex flex-wrap gap-2">
                                                    {log.artifacts.map((artifact) => {
                                                        const IconComponent = getIconComponent(artifact.icon);
                                                        return (
                                                            <button
                                                                key={artifact.id}
                                                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200"
                                                            >
                                                                <IconComponent className="h-3 w-3 text-gray-600" />
                                                                {artifact.label}
                                                                {artifact.icon === 'dashboard' && (
                                                                    <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                                    </svg>
                                                                )}
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                <aside className="w-80 border-l border-gray-200 bg-white overflow-y-auto">
                    <div className="p-4">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-sm font-semibold text-gray-900 flex items-center gap-1">
                                Key Details
                                <ChevronLeft className="h-3.5 w-3.5 -rotate-90" />
                            </h2>
                            <button className="p-1 hover:bg-gray-100 rounded">
                                <Maximize2 className="h-4 w-4 text-gray-500" />
                            </button>
                        </div>

                        {/* Summary Section */}
                        <div className="mb-6">
                            <h3 className="text-xs font-medium text-gray-500 mb-3">Summary</h3>
                            <div className="space-y-2.5 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Customer Name</span>
                                    <span className="text-gray-900 font-medium">{keyDetails.customerName}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Vehicle</span>
                                    <span className="text-gray-900 font-medium">{keyDetails.vehicle}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">BOS Effective Date</span>
                                    <span className="text-gray-900 font-medium">{keyDetails.bosEffectiveDate}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Applicable Loan / Lien Amount</span>
                                    <span className="text-gray-900 font-medium">{keyDetails.applicableLoan}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Net Vehicle Value</span>
                                    <span className="text-gray-900 font-medium">{keyDetails.netVehicleValue}</span>
                                </div>
                            </div>
                        </div>

                        {/* Artifacts Section */}
                        <div>
                            <h3 className="text-xs font-medium text-gray-500 mb-3">Artifacts</h3>
                            <div className="space-y-1.5">
                                {sidebarArtifacts.map((artifact) => {
                                    const IconComponent = getIconComponent(artifact.icon);
                                    return (
                                        <button
                                            key={artifact.id}
                                            className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded hover:bg-gray-50 text-left"
                                        >
                                            <IconComponent className="h-4 w-4 text-gray-600 flex-shrink-0" />
                                            <span className="text-sm text-gray-900">{artifact.label}</span>
                                            {artifact.icon === 'dashboard' && (
                                                <svg className="h-3 w-3 text-gray-400 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default ProcessDetails;