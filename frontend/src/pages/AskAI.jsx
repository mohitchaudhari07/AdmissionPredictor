import axios from "axios";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";

const AskAI = () => {
  const [question, setQuestion] = useState("");
  const [reply, setReply] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (error == "Unauthorizedtokenmissing") {
      navigate("/login");
    }

    try {
      const formData = new FormData(e.target);
      setQuestion(formData.get("userMessage"));
      const Message = formData.get("userMessage");

      const responce = await axios.post(
        "http://localhost:3000/api/ask",
        { Message: Message },
        { withCredentials: true },
      );

      setReply(responce.data.answer);
      // Clear the input field after submission
      e.target.reset();
    } catch (err) {
      console.error("Error asking AI:", err);
      setError(
        err?.response?.data?.message || err.message || "Failed to get response",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen overflow-y-clip  flex items-center justify-center bg-linear-to-br from-[#e6d3b3] via-[#d2b48c] to-[#a67c52] p-6">
      {/* Card Container */}
      <div
        className="w-full max-w-5xl overflow-y-hidden rounded-2xl shadow-2xl p-10
        bg-linear-to-br from-[#e6d3b3] via-[#d2b48c] to-[#a67c52]"
      >
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="text-3xl text-brown-900">✦</div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-semibold text-[#3e2723] mb-10">
          Ask Me
        </h2>

        {/* Chat Section */}
        <div className="space-y-4 h-53 max-h-68 overflow-y-scroll">
          {/* User Message */}
          <div className="flex justify-start">
            <div className="bg-white/70 backdrop-blur-md px-4 py-2 rounded-xl  shadow text-sm text-gray-800 max-w-xs">
              {question ||
                "Hi! I am your AI counselor. Ask me anything about your college admission chances, branch selection, or anything else related to your engineering college journey!"}
            </div>
          </div>

          {/* AI Message */}
          <div className="flex justify-end">
            <div className="bg-white/80 backdrop-blur-md px-5 py-4 rounded-xl shadow text-sm text-gray-800 max-w-md">
              <p className="font-medium mb-2 prose max-w-none">
                {" "}
                <ReactMarkdown>{reply}</ReactMarkdown>
              </p>
            </div>
          </div>
        </div>

        {/* Input Box */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex items-center bg-white/80 rounded-xl shadow px-4 py-2"
        >
          <input
            name="userMessage"
            type="text"
            placeholder="Ask me about your college admission chances, branch selection, or anything else related to your engineering college journey!"
            className="flex-1 outline-none bg-white/80 text-sm"
          />

          <button
            disabled={loading}
            type="submit"
            className="ml-3 cursor-pointer bg-[#6d4c41] hover:bg-[#5d4037] text-white px-4 py-2 rounded-lg"
          >
            ➤
          </button>
        </form>
      </div>
    </div>
  );
};

export default AskAI;
