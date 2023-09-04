/* eslint-disable react-hooks/rules-of-hooks */

import useSWR from 'swr';
import { mutationRequest } from './sendData';
import { fetcher, sessionFetcher } from './fetcher';

export const userRegister = async (values) => {
  const result = await mutationRequest('/auth/register', 'post', values);
  return result;
};
export const addPost = async (values) => {
  const result = await mutationRequest('/posts/post', 'post', values);
  return result;
};
export const fetchPosts = () => {
  const { data, error, mutate } = useSWR('/posts/get', fetcher);
  return {
    posts: data?.posts,
    postsLoading: !error && !data,
    postsError: error,
    mutatePosts: mutate,
  };
};
export const deletePost = async (id) => {
  const result = await mutationRequest(`/posts/delete?id=${id}`, 'delete');
  return result;
};
export const fetchSinglePost = (slug) => {
  const { data, error, mutate } = useSWR(`/posts/single?slug=${slug}`, fetcher);
  return {
    post: data?.post,
    postLoading: !error && !data,
    postError: error,
    mutatePost: mutate,
  };
};

// Admins
export const fetchAdmins = () => {
  const { data, error, mutate } = useSWR('/admin/get', fetcher);
  return {
    admins: data?.admins,
    adminsLoading: !error && !data,
    adminsError: error,
    mutateAdmins: mutate,
  };
};
export const addAdmin = async (values) => {
  const result = await mutationRequest('/auth/register', 'post', values);
  return result;
};
export const deleteAdmin = async (id) => {
  const result = await mutationRequest(`/admin/delete?id=${id}`, 'delete');
  return result;
};

// Applicants
export const registerApplicant = async (values) => {
  const result = await mutationRequest('/applicant/post', 'post', values);
  return result;
};
export const fetchApplicants = () => {
  const { data, error, mutate } = useSWR('/applicant/get', fetcher);
  return {
    applicants: data?.applicants,
    applicantsLoading: !error && !data,
    applicantsError: error,
    mutateApplicants: mutate,
  };
};
export const deleteApplicant = async (id) => {
  const result = await mutationRequest(`/applicant/delete?id=${id}`, 'delete');
  return result;
};
export const activateApplicant = async (id) => {
  const result = await mutationRequest(`/applicant/activate?id=${id}`, 'delete');
  return result;
};
export const deactivateApplicant = async (id) => {
  const result = await mutationRequest(`/applicant/deactivate?id=${id}`, 'delete');
  return result;
};

// Reviews
export const addReview = async (values) => {
  const result = await mutationRequest('/review/post', 'post', values);
  return result;
};
export const deleteReview = async (id) => {
  const result = await mutationRequest(`/review/delete?id=${id}`, 'delete');
  return result;
};
export const fetchReviews = () => {
  const { data, error, mutate } = useSWR('/review/get', fetcher);
  return {
    reviews: data?.reviews,
    reviews_sorted: data?.reviews_sorted,
    reviewsLoading: !error && !data,
    reviewsError: error,
    mutateReviews: mutate,
  };
};
