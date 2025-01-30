import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card";

export default function Testimonial() {
    return (
        <div className="container mx-auto p-6">
            {/* Testimonials Section */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-6 h-auto w-full max-w-4xl mx-auto">
                {/* Left Card (Full height) */}
                <Card className="row-span-2 p-6 rounded-lg shadow-lg">
                    <CardContent>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore fugit nihil a deserunt cum est, reiciendis autem esse, numquam, ducimus omnis quos necessitatibus dolorem."
                        </p>
                    </CardContent>
                    <CardHeader className="pt-4">
                        <CardTitle className="text-lg font-semibold">Abhishek Kumar</CardTitle>
                        <CardDescription className="text-gray-500">Founder of WholeSale</CardDescription>
                    </CardHeader>
                </Card>

                {/* Right Top Card */}
                <Card className="p-6 rounded-lg shadow-lg">
                    <CardContent>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore fugit nihil a deserunt cum est, reiciendis autem esse, numquam, ducimus omnis quos necessitatibus dolorem."
                        </p>
                    </CardContent>
                    <CardHeader className="pt-4">
                        <CardTitle className="text-lg font-semibold">Abhishek Kumar</CardTitle>
                        <CardDescription className="text-gray-500">Founder of WholeSale</CardDescription>
                    </CardHeader>
                </Card>

                {/* Right Bottom Card */}
                <Card className="p-6 rounded-lg shadow-lg">
                    <CardContent>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore fugit nihil a deserunt cum est, reiciendis autem esse, numquam, ducimus omnis quos necessitatibus dolorem."
                        </p>
                    </CardContent>
                    <CardHeader className="pt-4">
                        <CardTitle className="text-lg font-semibold">Abhishek Kumar</CardTitle>
                        <CardDescription className="text-gray-500">Founder of WholeSale</CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div>
    );
}
