import React from 'react';
import { Search, Plus } from 'lucide-react';

const PeoplePage = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Vignesh',
            email: 'vignesh@zamp.ai',
            role: 'System Admin',
            team: '-',
            isYou: true,
            avatar: 'V'
        },
        {
            id: 2,
            name: 'Shubham',
            email: 'shubham@zamp.ai',
            role: 'System Admin',
            team: '-',
            isYou: false,
            avatar: 'S'
        },
        {
            id: 3,
            name: 'Prabhu',
            email: 'prabhu@zamp.ai',
            role: 'System Admin',
            team: '-',
            isYou: false,
            avatar: 'P'
        }
    ];

    return (
        <div className="flex-1 bg-white">
            {/* Page Header */}
            <div className="px-6 py-6">
                <h1 className="text-2xl font-semibold text-gray-900">People</h1>
            </div>

            {/* Search and Invite Section */}
            <div className="px-6 pb-4 flex items-center justify-between">
                <div className="relative w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search team members"
                        className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800">
                    Invite members
                </button>
            </div>

            {/* Tabs */}
            <div className="px-6 border-b border-gray-200">
                <div className="flex gap-6">
                    <button className="pb-3 text-sm font-medium text-gray-900 border-b-2 border-gray-900">
                        Team members
                    </button>
                    <button className="pb-3 text-sm font-medium text-gray-500 hover:text-gray-900">
                        Invited
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="px-6 py-4">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-gray-200">
                            <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                            <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teamMembers.map((member) => (
                            <tr key={member.id} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-medium text-gray-700">
                                            {member.avatar}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-gray-900">{member.name}</span>
                                            {member.isYou && (
                                                <span className="text-xs text-gray-500">(You)</span>
                                            )}
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4">
                                    <span className="text-sm text-gray-900">{member.email}</span>
                                </td>
                                <td className="py-4">
                                    <span className="text-sm text-gray-600">{member.role}</span>
                                </td>
                                <td className="py-4">
                                    <span className="text-sm text-gray-600">{member.team}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PeoplePage;