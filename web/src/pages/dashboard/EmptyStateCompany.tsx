import { Plus } from "lucide-react";
type EmptyStateCompanyProps = {
  onCreateCompany: () => void;
};

export const EmptyStateCompany = ({
  onCreateCompany,
}: EmptyStateCompanyProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white rounded-xl shadow-sm p-8 text-center">
      <div className="bg-purple-100 p-4 rounded-full mb-4">
        <Plus className="w-12 h-12 text-purple-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-800">No Company Yet</h2>
      <p className="text-gray-500 mt-2 max-w-sm">
        It looks like you have not registered a company yet. Please create your
        company profile first to start managing your business.
      </p>
      <button
        onClick={onCreateCompany}
        className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-all"
      >
        Create Company Now
      </button>
    </div>
  );
};
