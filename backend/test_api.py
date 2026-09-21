"""
Unit tests for SCRAPIT FastAPI backend endpoints.
Verifies health check readiness and error handling without requiring GPU.
"""

import sys
import os
import unittest

PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
sys.path.insert(0, PROJECT_ROOT)
sys.path.insert(0, os.path.dirname(__file__))

from fastapi.testclient import TestClient
from server import app


class TestScrapitBackend(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.client = TestClient(app)

    def test_health_check(self):
        """Ensure /api/health returns 200 OK and model status."""
        response = self.client.get("/api/health")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIn("status", data)
        self.assertEqual(data["status"], "ok")

    def test_invalid_estimate_payload(self):
        """Ensure /api/estimate rejects missing file payloads with 422 Unprocessable Entity."""
        response = self.client.post("/api/estimate")
        self.assertEqual(response.status_code, 422)


if __name__ == "__main__":
    unittest.main()
