/**
 * @failed
 * @link https://www.acmicpc.net/problem/10971
 */

/**
 *
 * 도시의 수 N
 * A > B 비용 i,j
 * B > A 비용 j,i
 *
 * TSP 문제 (외판원 순회)
 * 가장 적은 비용을 들여 도시를 모두 거쳐 원래 도시로 돌아온다.
 *
 * dfs + 백트레킹
 * visited N개
 * count++하면서 N번을 다돌고 N = count 이면서 다시 원래 도시로 가는 비용이 >0이면
 * mincost 설정
 */

const { createInput } = require("#helper/create-input");

const input = createInput().여러줄_띄어쓰기(Number);

function solution(input) {}
solution(input);
