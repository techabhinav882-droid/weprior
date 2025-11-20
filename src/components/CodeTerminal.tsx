import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function CodeTerminal() {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number } | null>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  const codeSnippets = [
    {
      title: "Kubernetes Deployment",
      language: "yaml",
      code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: production-app
  namespace: production
spec:
  replicas: 3
  selector:
    matchLabels:
      app: production-app
  template:
    metadata:
      labels:
        app: production-app
    spec:
      containers:
      - name: app
        image: myapp:v1.2.3
        ports:
        - containerPort: 8080
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10`,
    },
    {
      title: "Terraform Infrastructure",
      language: "hcl",
      code: `resource "aws_vpc" "production" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name        = "production-vpc"
    Environment = "production"
  }
}

resource "aws_subnet" "private" {
  count             = 3
  vpc_id            = aws_vpc.production.id
  cidr_block        = "10.0.\${count.index + 1}.0/24"
  availability_zone = data.aws_availability_zones.available.names[count.index]

  tags = {
    Name = "private-subnet-\${count.index + 1}"
    Type = "private"
  }
}

resource "aws_eks_cluster" "production" {
  name     = "production-cluster"
  role_arn = aws_iam_role.cluster.arn
  version  = "1.28"

  vpc_config {
    subnet_ids = aws_subnet.private[*].id
  }
}`,
    },
    {
      title: "Production Monitoring",
      language: "bash",
      code: `#!/bin/bash
# Production health check script

echo "🔍 Checking production systems..."

# Check Kubernetes cluster health
kubectl get nodes --no-headers | while read node status; do
  if [[ $status != "Ready" ]]; then
    echo "❌ Node $node is not ready"
    exit 1
  fi
done

# Check critical pods
critical_pods=("api" "database" "cache" "monitoring")
for pod in "\${critical_pods[@]}"; do
  if ! kubectl get pods -l app=$pod | grep -q "Running"; then
    echo "❌ Critical pod $pod is not running"
    exit 1
  fi
done

# Check resource usage
cpu_usage=$(kubectl top nodes | awk 'NR>1 {sum+=$3} END {print sum/NR}')
if (( $(echo "$cpu_usage > 80" | bc -l) )); then
  echo "⚠️  High CPU usage: $cpu_usage%"
fi

echo "✅ All systems operational"`,
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const currentCode = codeSnippets[currentSnippet].code;

    if (currentIndex < currentCode.length) {
      const timer = setTimeout(() => {
        setDisplayedText(currentCode.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      // Wait 3 seconds then move to next snippet
      const timer = setTimeout(() => {
        setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
        setDisplayedText("");
        setCurrentIndex(0);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, currentSnippet, isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSnippet = () => {
    setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
    setDisplayedText("");
    setCurrentIndex(0);
  };

  return (
    <div
      ref={terminalRef}
      className="relative bg-gray-900 rounded-2xl border border-gray-700 overflow-hidden shadow-2xl"
      onMouseEnter={(e) => {
        setShowTooltip(true);
        if (nextButtonRef.current) {
          const rect = nextButtonRef.current.getBoundingClientRect();
          setTooltipPosition({
            x: rect.left - 20,
            y: rect.top + rect.height / 2,
          });
        }
      }}
      onMouseLeave={() => {
        setShowTooltip(false);
        setTooltipPosition(null);
      }}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between bg-gray-800 px-6 py-4 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-300 font-mono text-sm">
            {codeSnippets[currentSnippet].title}
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={togglePlayPause}
            className="text-gray-400 hover:text-cyan-400 transition-colors p-1 rounded hover:bg-gray-700"
          >
            {isPlaying ? "⏸️" : "▶️"}
          </button>
          <button
            ref={nextButtonRef}
            onClick={nextSnippet}
            className="text-gray-400 hover:text-cyan-400 transition-colors p-1 rounded hover:bg-gray-700"
          >
            ⏭️
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-6 h-96 overflow-hidden">
        <pre className="text-sm font-mono text-gray-300 leading-relaxed">
          <code className="language-yaml">
            {displayedText}
            <span className="animate-pulse bg-cyan-400 w-2 h-5 inline-block ml-1"></span>
          </code>
        </pre>
      </div>

      {/* Floating Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 pointer-events-none"></div>

      {/* Tooltip rendered via portal */}
      {showTooltip &&
        tooltipPosition &&
        createPortal(
          <div
            className="fixed bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-3 rounded-lg text-sm font-medium whitespace-nowrap shadow-2xl animate-fadeIn pointer-events-none flex items-center gap-2"
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y}px`,
              transform: "translate(-100%, -50%)",
              zIndex: 9999,
            }}
          >
            <span>Click right to have more fun</span>
            <svg
              className="w-5 h-5 animate-bounce"
              style={{ animationDirection: "alternate", animationDuration: "0.8s" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
            {/* Arrow pointing to the button */}
            <div
              className="absolute w-0 h-0"
              style={{
                right: "-8px",
                top: "50%",
                transform: "translateY(-50%)",
                borderTop: "8px solid transparent",
                borderBottom: "8px solid transparent",
                borderLeft: "8px solid #a855f7",
              }}
            ></div>
          </div>,
          document.body
        )}
    </div>
  );
}
