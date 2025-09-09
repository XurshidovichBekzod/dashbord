import React from 'react'

import photo from "../../layout/assets/photos.svg"

const Product = () => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <h1>Hello Evano</h1>
                <input
                    type="text"
                    placeholder="Search"
                    className="border border-gray-300 rounded-lg px-3 py-1 text-sm outline-none"
                />
            </div>
            <div className='w-[100%] h-[200px] bg-[#fff] mt-[40px] rounded-3xl pt-[1px] pl-[40px] flex items-center justify-between pr-[30px]'>
                <img width={250} src={photo} alt="" />
                <img width={250} src={photo} alt="" />
                <img width={250} src={photo} alt="" />
            </div>
            <div>
                <div className="bg-white mt-8 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <h2 className="text-lg font-semibold">All Customers</h2>
                            <p className="text-sm text-[#16C098]">Active Members</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <input
                                type="text"
                                placeholder="Search"
                                className="border border-gray-300 rounded-lg px-3 py-1 text-sm outline-none" />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead>
                                <tr className="text-gray-500 border-b border-[#EEEEEE]">
                                    <th className="py-3">Customer Name</th>
                                    <th className="py-3">Company</th>
                                    <th className="py-3">Phone Number</th>
                                    <th className="py-3">Email</th>
                                    <th className="py-3">Country</th>
                                    <th className="py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { name: "Jane Cooper", company: "Microsoft", phone: "(225) 555-0118", email: "jane@microsoft.com", country: "United States", status: "Active" },
                                    { name: "Floyd Miles", company: "Yahoo", phone: "(205) 555-0100", email: "floyd@yahoo.com", country: "Kiribati", status: "Inactive" },
                                    { name: "Ronald Richards", company: "Adobe", phone: "(302) 555-0107", email: "ronald@adobe.com", country: "Israel", status: "Inactive" },
                                    { name: "Marvin McKinney", company: "Tesla", phone: "(252) 555-0126", email: "marvin@tesla.com", country: "Iran", status: "Active" },
                                    { name: "Jerome Bell", company: "Google", phone: "(629) 555-0129", email: "jerome@google.com", country: "Réunion", status: "Active" },

                                ].map((user, idx) => (
                                    <tr key={idx} className="border-b last:border-none border-[#EEEEEE]">
                                        <td className="py-3">{user.name}</td>
                                        <td>{user.company}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.email}</td>
                                        <td>{user.country}</td>
                                        <td>
                                            <span
                                                className={`px-3 py-1 rounded-lg text-xs font-medium ${user.status === "Active"
                                                    ? "bg-green-100 text-green-600"
                                                    : "bg-red-100 text-red-600"
                                                    }`}
                                            >
                                                {user.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Product