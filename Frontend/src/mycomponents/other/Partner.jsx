export default function Partner() {
    return (
        <div className="border-t-8 border-gray-200 py-12">
            <div className="text-center mb-8">
                <div className="text-4xl font-semibold text-gray-800">Our Partners</div>
            </div>
            <div className="flex justify-center space-x-8">
                <div className="flex-shrink-0">
                    <img className="h-40 md:h-60 object-contain shadow-lg" src="DPS.png" alt="Partner 1" />
                </div>
                <div className="flex-shrink-0">
                    <img className="h-40 md:h-60 object-contain shadow-lg" src="DPS.png" alt="Partner 2" />
                </div>
            </div>
        </div>
    );
}
