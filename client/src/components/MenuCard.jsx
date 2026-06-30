export default function MenuCard({ item }) {
  return (
    <div className="bg-white rounded-xl p-4 flex justify-between items-start gap-4 shadow-sm hover:shadow-card transition-shadow border border-teal-100">
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          {item.vegOnly && (
            <span className="w-3.5 h-3.5 border-2 border-green-600 flex items-center justify-center rounded-sm shrink-0">
              <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
            </span>
          )}
          <h4 className="font-heading font-semibold text-teal-900 text-base">
            {item.name}
          </h4>
        </div>
        {item.description && (
          <p className="text-sm text-teal-700/70 leading-snug">{item.description}</p>
        )}
        {item.quantity && (
          <span className="inline-block mt-1.5 text-xs text-olive-600 font-medium">
            {item.quantity}
          </span>
        )}
      </div>
      <div className="text-right shrink-0">
        <span className="font-heading font-bold text-lg text-teal-800">
          ₹{item.price}
        </span>
      </div>
    </div>
  );
}