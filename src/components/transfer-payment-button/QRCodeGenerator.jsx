"use client";
import { useRouter } from "next/navigation";
import { QRCodeCanvas } from "qrcode.react";
import { ImCancelCircle } from "react-icons/im";
import * as Dialog from "@radix-ui/react-dialog";

export default function QRCodeGenerator() {
    const walletURL = "https://play.google.com/store/apps/details?id=com.paypal.android.p2pmobile&hl=en";
    const router = useRouter();

    return (
        <div>
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <button
                        className="cursor-pointer px-8 py-2 text-[1rem] font-medium bg-gradient-to-r from-[#0a136e] to-[#0770e6] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        Start a Transfer →
                    </button>
                </Dialog.Trigger>

                <Dialog.Portal>
                    <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl w-[100%] max-w-lg z-[60]">
                        <div className="flex justify-end">
                            <Dialog.Close asChild>
                                <button className="text-black-500 bg-gray-400 text-[12px] font-light p-2 cursor-pointer rounded-full hover:text-black-700">
                                    <ImCancelCircle size={24} />
                                </button>
                            </Dialog.Close>
                        </div>

                        <h2 className="text-lg font-bold mb-4 text-center">Join thousands of users sending money</h2>
                        <p className="text-sm font-light text-center">
                            Scan the QR code below with your phone
                        </p>
                        <p className="text-sm font-light text-center">
                            and you'll get a link to get started
                        </p>

                        <div className="flex justify-center mt-8 mb-4">
                            <QRCodeCanvas value={walletURL} size={160} />
                        </div>

                        <div className="flex justify-center">
                            <button
                                onClick={() => router.push("/create-wallet")}
                                className="cursor-pointer mt-4 px-6 py-2 bg-[#0a136e] text-white rounded-full hover:bg-[#0c1c91] transition-all duration-300"
                            >
                                Send from here
                            </button>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
}
