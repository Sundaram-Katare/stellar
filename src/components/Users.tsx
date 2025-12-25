import CardB from "./ui/CardB";

export default function Users() {
  return (
    <section className="w-full flex justify-center py-20">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-16 px-6">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center text-left md:w-1/3">
          <h1 className="text-white font-jersey text-5xl leading-tight">
            Use it,
          </h1>
          <h1 className="text-pink-500 font-jersey text-5xl leading-tight">
            If you are...
          </h1>

          <p className="mt-4 text-gray-400 text-sm max-w-xs">
            Built for developers who care about clean code, performance,
            and best practices.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6 md:w-2/3">
          <CardB
            title="Solo Developer"
            description="Get instant feedback while building side projects or learning."
          />
          <CardB
            title="Startup Engineer"
            description="Ship faster with AI-powered bug detection and optimization."
          />
          <CardB
            title="Student / Learner"
            description="Improve code quality and learn best practices effortlessly."
          />
        </div>

      </div>
    </section>
  );
}
