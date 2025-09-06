// Blog API client for user blog pages
// Uses the same base URL convention as other frontend APIs

const API_BASE = import.meta?.env?.VITE_API_URL || '${API_BASE}';

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData?.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

// Normalize list response where backend might return {data: []} or {articles: []} or []
const normalizeArticlesList = (json) => {
  if (Array.isArray(json)) return json;
  if (Array.isArray(json?.data)) return json.data;
  if (Array.isArray(json?.articles)) return json.articles;
  if (Array.isArray(json?.docs)) return json.docs;
  if (Array.isArray(json?.data?.docs)) return json.data.docs;
  return [];
};

// Normalize single article response where backend might return {data: {...}} or {article: {...}} or {...}
const normalizeSingleArticle = (json) => {
  if (json?.data && typeof json.data === 'object') return json.data;
  if (json?.article && typeof json.article === 'object') return json.article;
  return json;
};

export async function getAllArticles() {
  const response = await fetch(`${API_BASE}/api/v1/articles`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const json = await handleResponse(response);
  return normalizeArticlesList(json);
}

export async function getArticleById(id) {
  if (!id) throw new Error('Article id is required');
  const response = await fetch(`${API_BASE}/api/v1/articles/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const json = await handleResponse(response);
  return normalizeSingleArticle(json);
}

export async function createArticle(articleData) {
  const response = await fetch(`${API_BASE}/api/v1/articles`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(articleData),
  });
  const json = await handleResponse(response);
  return normalizeSingleArticle(json);
}

export async function updateArticle(id, updatedData) {
  if (!id) throw new Error('Article id is required');
  const response = await fetch(`${API_BASE}/api/v1/articles/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData),
  });
  const json = await handleResponse(response);
  return normalizeSingleArticle(json);
}

export async function deleteArticle(id) {
  if (!id) throw new Error('Article id is required');
  const response = await fetch(`${API_BASE}/api/v1/articles/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  const json = await handleResponse(response);
  return normalizeSingleArticle(json);
}

export default {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
};


